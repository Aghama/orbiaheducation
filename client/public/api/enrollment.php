<?php
// Orbiah Academy enrollment endpoint for Namecheap shared hosting.
// Configure the domain mailbox and local mail routing in cPanel before launch.

declare(strict_types=1);

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot: real visitors never see or fill this field.
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$fields = [
    'name' => 'Parent / student name',
    'age' => 'Student age / grade',
    'country' => 'Country',
    'program' => 'Program interested in',
    'whatsapp' => 'WhatsApp number',
    'email' => 'Email address',
    'language' => 'Preferred language',
];

$requiredFields = ['name', 'email'];
$clean = [];
foreach ($fields as $key => $label) {
    $value = trim((string)($data[$key] ?? ''));

    if ($value === '' && in_array($key, $requiredFields, true)) {
        http_response_code(422);
        echo json_encode(['ok' => false, 'error' => $label . ' is required']);
        exit;
    }

    $clean[$key] = $value === '' ? 'Not provided' : mb_substr($value, 0, 300);
}

if (!filter_var($clean['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please provide a valid email address']);
    exit;
}

$clean['message'] = mb_substr(trim((string)($data['message'] ?? '')), 0, 2000);
if ($clean['message'] === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please enter your message']);
    exit;
}

$clean['consent'] = !empty($data['consent']);
if (!$clean['consent']) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Consent is required']);
    exit;
}

$to = 'info@orbiaheducation.com';
$from = 'info@orbiaheducation.com';
$subject = 'New Orbiah Academy enrolment interest — ' . $clean['name'];
$body = "New Orbiah Academy enrolment interest\n\n";
foreach ($fields as $key => $label) {
    $body .= $label . ': ' . $clean[$key] . "\n";
}
$body .= "Message: " . ($clean['message'] ?: 'Not provided') . "\n";
$body .= "Consent: Yes\n";
$body .= "Submitted from: " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$headers = [
    'From: Orbiah Academy <' . $from . '>',
    'Reply-To: ' . $clean['email'],
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = @mail($to, $subject, $body, implode("\r\n", $headers), '-f' . $from);
if (!$sent) {
    // Fallback attempt without fifth parameter in case mail wrapper restricts it
    $sent = @mail($to, $subject, $body, implode("\r\n", $headers));
}
if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Unable to send enquiry. Please contact info@orbiaheducation.com directly.']);
    exit;
}

echo json_encode(['ok' => true]);

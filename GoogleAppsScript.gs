// ============================================================
// GrowthMate — Google Apps Script Backend
// Paste this entire file into Google Apps Script editor
// script.google.com → New Project → paste → Deploy as Web App
// ============================================================

// ── CONFIG ──────────────────────────────────────────────────
const SHEET_NAME = 'Bookings';       // Tab name in your Google Sheet
const NOTIFY_EMAIL = 'nitin.k.automation@gmail.com'; // Your email for alerts
// ────────────────────────────────────────────────────────────

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const sheet = getOrCreateSheet();
    appendRow(sheet, data);
    sendEmailAlert(data);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log('Error: ' + err.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Allow browser preflight (CORS)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'alive' }))
    .setMimeType(ContentService.MimeType.JSON);
}

// ── SHEET LOGIC ──────────────────────────────────────────────
function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Header row — styled
    const headers = [
      'Timestamp (IST)',
      'Full Name',
      'Email',
      'Phone / WhatsApp',
      'Company / Brokerage',
      'Team Size',
      'Lead Source',
      'Pain Point / Message',
      'Status',        // You fill this: New / Contacted / Booked / Closed
      'Notes',         // Your personal notes
    ];
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setValues([headers]);

    // Style the header
    headerRange.setBackground('#050B18');
    headerRange.setFontColor('#00D4FF');
    headerRange.setFontWeight('bold');
    headerRange.setFontSize(11);
    sheet.setFrozenRows(1);

    // Column widths
    sheet.setColumnWidth(1, 160);  // Timestamp
    sheet.setColumnWidth(2, 160);  // Name
    sheet.setColumnWidth(3, 200);  // Email
    sheet.setColumnWidth(4, 160);  // Phone
    sheet.setColumnWidth(5, 180);  // Company
    sheet.setColumnWidth(6, 120);  // Team size
    sheet.setColumnWidth(7, 140);  // Source
    sheet.setColumnWidth(8, 300);  // Message
    sheet.setColumnWidth(9, 110);  // Status
    sheet.setColumnWidth(10, 200); // Notes
  }

  return sheet;
}

function appendRow(sheet, data) {
  const row = [
    data.submittedAt || new Date().toLocaleString('en-IN'),
    data.name        || '',
    data.email       || '',
    data.phone       || '',
    data.company     || '',
    data.agents      || '',
    data.source      || '',
    data.message     || '',
    'New',           // Default status
    '',              // Empty notes
  ];

  sheet.appendRow(row);

  // Highlight newest row
  const lastRow = sheet.getLastRow();
  const rowRange = sheet.getRange(lastRow, 1, 1, row.length);
  rowRange.setBackground('#0A1628');
  rowRange.setFontColor('#F0F4FF');
  rowRange.setFontSize(11);

  // Status cell — green background
  sheet.getRange(lastRow, 9).setBackground('#00FF9415').setFontColor('#00FF94');
}

// ── EMAIL ALERT ───────────────────────────────────────────────
function sendEmailAlert(data) {
  const subject = `🔥 New Call Booking — ${data.name} (${data.company || 'No company'})`;

  const body = `
New booking received on GrowthMate!

━━━━━━━━━━━━━━━━━━━━━━━
NAME:     ${data.name}
EMAIL:    ${data.email}
PHONE:    ${data.phone}
COMPANY:  ${data.company || '—'}
TEAM:     ${data.agents || '—'}
SOURCE:   ${data.source || '—'}
TIME:     ${data.submittedAt}
━━━━━━━━━━━━━━━━━━━━━━━

PAIN POINT:
${data.message || '(not provided)'}

━━━━━━━━━━━━━━━━━━━━━━━
Reply to: ${data.email}
  `.trim();

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    body: body,
  });
}

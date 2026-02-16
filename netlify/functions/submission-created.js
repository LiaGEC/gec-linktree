const ICON_BASE = 'https://gec-linktree.netlify.app/icons';
const LOGO = 'https://gec-linktree.netlify.app/gec-logo.png';

const emailHtml = (name) => `<!DOCTYPE html>
<html lang="ka" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="dark">
<meta name="supported-color-schemes" content="dark">
<title>GEC — Business Growth Services</title>
<!--[if mso]>
<style type="text/css">
    body, table, td { font-family: Arial, sans-serif !important; }
</style>
<![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#0d2233;font-family:'Segoe UI',Arial,sans-serif;color:#ffffff;" bgcolor="#0d2233">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0d2233;" bgcolor="#0d2233">
<tr><td align="center" style="padding:30px 16px;" bgcolor="#0d2233">

<table role="presentation" width="440" cellpadding="0" cellspacing="0" border="0" style="max-width:440px;width:100%;">

    <!-- Logo -->
    <tr><td align="center" style="padding-bottom:8px;">
        <img src="${LOGO}" alt="GEC" width="56" style="display:block;height:auto;">
    </td></tr>

    <!-- Subtitle -->
    <tr><td align="center" style="padding-bottom:24px;">
        <p style="margin:0;font-size:12px;color:#8494a7;letter-spacing:1.2px;text-transform:uppercase;">From Delivery to Lasting Impact</p>
    </td></tr>

    <!-- Greeting -->
    <tr><td style="padding-bottom:24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#132d42;border:1px solid #1a3347;border-radius:14px;" bgcolor="#132d42">
        <tr><td style="padding:20px 24px;">
            <p style="margin:0;font-size:16px;font-weight:600;color:#ffffff;">გამარჯობა${name ? ', ' + name : ''}!</p>
            <p style="margin:10px 0 0;font-size:13px;color:#8494a7;line-height:1.6;">მადლობა დაინტერესებისთვის! ქვემოთ იხილეთ ჩვენი სერვისები და თვითშეფასების კითხვარები.</p>
        </td></tr>
        </table>
    </td></tr>

    <!-- Incentive -->
    <tr><td style="padding-bottom:24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#0d3d2e;border:1px solid #0a5c45;border-radius:12px;" bgcolor="#0d3d2e">
        <tr><td style="padding:14px 20px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#8494a7;line-height:1.6;">შეავსეთ თვითშეფასების კითხვარი და მიიღეთ <strong style="color:#049978;">უფასო 30-წუთიანი კონსულტაცია</strong> GEC-ის გუნდთან</p>
        </td></tr>
        </table>
    </td></tr>

    <!-- Book a Call -->
    <tr><td style="padding-bottom:24px;">
        <a href="https://outlook.office.com/book/GECBusinessDevelopmentTeam@gec-consulting.com/?ismsaljsauthenabled" target="_blank" style="text-decoration:none;display:block;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#132d42;border:1px solid rgba(4,153,120,0.25);border-radius:14px;" bgcolor="#132d42">
        <tr>
            <td width="50" style="padding:14px 0 14px 16px;vertical-align:middle;">
                <div style="width:38px;height:38px;border-radius:10px;background-color:#0d3d2e;text-align:center;line-height:38px;font-size:18px;">📹</div>
            </td>
            <td style="padding:14px 8px;vertical-align:middle;">
                <p style="margin:0;font-size:13px;font-weight:600;color:rgba(255,255,255,0.9);">დაჯავშნე შეხვედრა</p>
                <p style="margin:2px 0 0;font-size:10px;color:#8494a7;">ბიზნესის განვითარების გუნდთან ონლაინ კონსულტაცია</p>
            </td>
            <td width="30" style="padding-right:16px;vertical-align:middle;color:#8494a7;font-size:16px;">&#8250;</td>
        </tr>
        </table>
        </a>
    </td></tr>

    <!-- ═══ Phase 01: დაგეგმვა ═══ -->
    <tr><td style="padding:0 0 6px 4px;" bgcolor="#0d2233">
        <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#049978;">01 ფაზა</p>
        <p style="margin:2px 0 0;font-size:17px;font-weight:700;color:#ffffff;">დაგეგმვა</p>
        <p style="margin:2px 0 0;font-size:12px;color:#8494a7;font-style:italic;">საით მივდივარ?</p>
    </td></tr>

    <!-- Strategy Card -->
    <tr><td style="padding-bottom:10px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#132d42;border:1px solid #1a3347;border-left:3px solid #049978;border-radius:14px;overflow:hidden;" bgcolor="#132d42">
        <tr>
            <td width="54" style="padding:14px 0 10px 14px;vertical-align:top;">
                <div style="width:38px;height:38px;border-radius:10px;background-color:#0d3d2e;text-align:center;line-height:38px;"><img src="${ICON_BASE}/strategy.png" alt="" width="16" height="16" style="vertical-align:middle;border:0;"></div>
            </td>
            <td style="padding:14px 14px 10px 8px;vertical-align:top;">
                <p style="margin:0;font-size:14px;font-weight:700;color:#049978;">სტრატეგიული დაგეგმვა</p>
                <p style="margin:2px 0 0;font-size:10px;color:#8494a7;">ბიზნეს სტრატეგიის შემუშავება და განხორციელება</p>
            </td>
        </tr>
        <tr><td colspan="2" style="padding:0 14px 14px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                <td width="49%" style="padding-right:4px;">
                    <a href="https://forms.office.com/pages/responsepage.aspx?id=c8mr-Tqxpkip2pdz2FalUfUUf98_GFFMtBUigYiQVURUQ1E1REJDWjI0STVSOTVEM1FFRDc2Qk1GMy4u&route=shorturl" target="_blank" style="text-decoration:none;display:block;background-color:#049978;border-radius:10px;padding:9px 0;text-align:center;font-size:11px;font-weight:600;color:#ffffff;">თვითშეფასება</a>
                </td>
                <td width="49%" style="padding-left:4px;">
                    <a href="https://www.gecbusiness.com/ka/strategiuli-dagegmva-da-gankhortsieleba" target="_blank" style="text-decoration:none;display:block;border:1px solid #2a3f52;border-radius:10px;padding:8px 0;text-align:center;font-size:11px;font-weight:600;color:#8494a7;">სერვისი</a>
                </td>
            </tr></table>
        </td></tr>
        </table>
    </td></tr>

    <!-- ═══ Phase 02: შესაძლებლობა ═══ -->
    <tr><td style="padding:16px 0 6px 4px;" bgcolor="#0d2233">
        <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#F05324;">02 ფაზა</p>
        <p style="margin:2px 0 0;font-size:17px;font-weight:700;color:#ffffff;">შესაძლებლობა</p>
        <p style="margin:2px 0 0;font-size:12px;color:#8494a7;font-style:italic;">როგორ ვაშენებთ?</p>
    </td></tr>

    <!-- BPM Card -->
    <tr><td style="padding-bottom:10px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#132d42;border:1px solid #1a3347;border-left:3px solid #F05324;border-radius:14px;overflow:hidden;" bgcolor="#132d42">
        <tr>
            <td width="54" style="padding:14px 0 10px 14px;vertical-align:top;">
                <div style="width:38px;height:38px;border-radius:10px;background-color:#3d2015;text-align:center;line-height:38px;"><img src="${ICON_BASE}/bpm.png" alt="" width="16" height="16" style="vertical-align:middle;border:0;"></div>
            </td>
            <td style="padding:14px 14px 10px 8px;vertical-align:top;">
                <p style="margin:0;font-size:14px;font-weight:700;color:#F05324;">ბიზნეს პროცესების მართვა</p>
                <p style="margin:2px 0 0;font-size:10px;color:#8494a7;">BPM — პროცესების ოპტიმიზაცია და ავტომატიზაცია</p>
            </td>
        </tr>
        <tr><td colspan="2" style="padding:0 14px 14px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                <td width="49%" style="padding-right:4px;">
                    <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=c8mr-Tqxpkip2pdz2FalUexGxrANu4ZMis7b5YlpUahURjJJOUhYMzZFODJYS0pWNDExMTgyRzJLOC4u" target="_blank" style="text-decoration:none;display:block;background-color:#F05324;border-radius:10px;padding:9px 0;text-align:center;font-size:11px;font-weight:600;color:#ffffff;">თვითშეფასება</a>
                </td>
                <td width="49%" style="padding-left:4px;">
                    <a href="https://www.gecbusiness.com/ka/biznes-protsesebis-martva-2" target="_blank" style="text-decoration:none;display:block;border:1px solid #2a3f52;border-radius:10px;padding:8px 0;text-align:center;font-size:11px;font-weight:600;color:#8494a7;">სერვისი</a>
                </td>
            </tr></table>
        </td></tr>
        </table>
    </td></tr>

    <!-- Digital Transformation Card -->
    <tr><td style="padding-bottom:10px;">
        <a href="https://www.gecbusiness.com/ka/tsifruli-transformatsia-biznesis-martvis-inovatsiuri-midgoma" target="_blank" style="text-decoration:none;display:block;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#132d42;border:1px solid #1a3347;border-left:3px solid #F05324;border-radius:14px;" bgcolor="#132d42">
        <tr>
            <td width="54" style="padding:14px 0 14px 14px;vertical-align:middle;">
                <div style="width:38px;height:38px;border-radius:10px;background-color:#3d3310;text-align:center;line-height:38px;"><img src="${ICON_BASE}/digital.png" alt="" width="16" height="16" style="vertical-align:middle;border:0;"></div>
            </td>
            <td style="padding:14px 8px;vertical-align:middle;">
                <p style="margin:0;font-size:14px;font-weight:700;color:#F05324;">ციფრული ტრანსფორმაცია</p>
                <p style="margin:2px 0 0;font-size:10px;color:#8494a7;">ბიზნესის მართვის ინოვაციური მიდგომა</p>
            </td>
            <td width="30" style="padding-right:14px;vertical-align:middle;color:#8494a7;font-size:16px;">&#8250;</td>
        </tr>
        </table>
        </a>
    </td></tr>

    <!-- Performance Management Card -->
    <tr><td style="padding-bottom:10px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#132d42;border:1px solid #1a3347;border-left:3px solid #F05324;border-radius:14px;" bgcolor="#132d42">
        <tr>
            <td width="54" style="padding:14px 0 14px 14px;vertical-align:middle;">
                <div style="width:38px;height:38px;border-radius:10px;background-color:#3d2015;text-align:center;line-height:38px;">📊</div>
            </td>
            <td style="padding:14px 8px;vertical-align:middle;">
                <p style="margin:0;font-size:14px;font-weight:700;color:#F05324;">შედეგების მართვა</p>
                <p style="margin:2px 0 0;font-size:10px;color:#8494a7;">Performance Management — მიზნების და KPI სისტემა</p>
            </td>
            <td width="60" style="padding-right:14px;vertical-align:middle;text-align:right;">
                <span style="font-size:10px;color:#5a6d7e;background-color:#1a2d3d;padding:4px 8px;border-radius:6px;">მალე</span>
            </td>
        </tr>
        </table>
    </td></tr>

    <!-- ═══ Phase 03: დივერსიფიცირება ═══ -->
    <tr><td style="padding:16px 0 6px 4px;" bgcolor="#0d2233">
        <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#226263;">03 ფაზა</p>
        <p style="margin:2px 0 0;font-size:17px;font-weight:700;color:#ffffff;">დივერსიფიცირება</p>
        <p style="margin:2px 0 0;font-size:12px;color:#8494a7;font-style:italic;">როგორ ვფართოვდებით?</p>
    </td></tr>

    <!-- Export Card -->
    <tr><td style="padding-bottom:10px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#132d42;border:1px solid #1a3347;border-left:3px solid #226263;border-radius:14px;overflow:hidden;" bgcolor="#132d42">
        <tr>
            <td width="54" style="padding:14px 0 10px 14px;vertical-align:top;">
                <div style="width:38px;height:38px;border-radius:10px;background-color:#153535;text-align:center;line-height:38px;"><img src="${ICON_BASE}/export.png" alt="" width="16" height="16" style="vertical-align:middle;border:0;"></div>
            </td>
            <td style="padding:14px 14px 10px 8px;vertical-align:top;">
                <p style="margin:0;font-size:14px;font-weight:700;color:#226263;">ექსპორტის განვითარება</p>
                <p style="margin:2px 0 0;font-size:10px;color:#8494a7;">ექსპორტის დაგეგმვა და საერთაშორისო ბაზრებზე შესვლა</p>
            </td>
        </tr>
        <tr><td colspan="2" style="padding:0 14px 14px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
                <td width="49%" style="padding-right:4px;">
                    <a href="https://forms.office.com/pages/responsepage.aspx?id=c8mr-Tqxpkip2pdz2FalUfLQVuIwRZZLoHgQGtLd3phUNExNVjJFVVNISUZTVEFGMjlSVzI5OFBOSi4u&route=shorturl" target="_blank" style="text-decoration:none;display:block;background-color:#226263;border-radius:10px;padding:9px 0;text-align:center;font-size:11px;font-weight:600;color:#ffffff;">თვითშეფასება</a>
                </td>
                <td width="49%" style="padding-left:4px;">
                    <a href="https://www.gecbusiness.com/ka/eqsportis-ganvitareba-da-danergva" target="_blank" style="text-decoration:none;display:block;border:1px solid #2a3f52;border-radius:10px;padding:8px 0;text-align:center;font-size:11px;font-weight:600;color:#8494a7;">სერვისი</a>
                </td>
            </tr></table>
        </td></tr>
        </table>
    </td></tr>

    <!-- Social links -->
    <tr><td align="center" style="padding:24px 0 16px;" bgcolor="#0d2233">
        <a href="https://www.gecbusiness.com" target="_blank" style="text-decoration:none;margin:0 6px;"><img src="${ICON_BASE}/website.png" alt="Web" width="20" height="20" style="border:0;"></a>
        <a href="https://www.instagram.com/gec_businessservices/" target="_blank" style="text-decoration:none;margin:0 6px;"><img src="${ICON_BASE}/instagram.png" alt="IG" width="20" height="20" style="border:0;"></a>
        <a href="https://www.linkedin.com/company/gecbusinessgrowthservices/" target="_blank" style="text-decoration:none;margin:0 6px;"><img src="${ICON_BASE}/linkedin.png" alt="LI" width="20" height="20" style="border:0;"></a>
        <a href="https://www.facebook.com/GECBusinessServices" target="_blank" style="text-decoration:none;margin:0 6px;"><img src="${ICON_BASE}/facebook.png" alt="FB" width="20" height="20" style="border:0;"></a>
    </td></tr>

    <!-- Signature -->
    <tr><td style="padding:16px 0 0;" bgcolor="#0d2233">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid #1f3349;">
        <tr><td style="padding:20px 0;" bgcolor="#0d2233">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
            <tr>
                <td style="padding-right:16px;vertical-align:top;">
                    <img src="${LOGO}" alt="GEC" width="50" style="display:block;border-radius:8px;">
                </td>
                <td style="vertical-align:top;">
                    <p style="margin:0 0 4px;font-size:12px;color:#8494a7;font-style:italic;">პატივისცემით,</p>
                    <p style="margin:0 0 2px;font-size:14px;font-weight:600;color:#ffffff;">Lia Kereselidze</p>
                    <p style="margin:0 0 10px;font-size:11px;color:#049978;">Business Development Manager</p>
                    <p style="margin:0 0 2px;"><a href="tel:+995577724445" style="text-decoration:none;font-size:11px;color:#8494a7;">+995 577 724 445</a></p>
                    <p style="margin:0 0 2px;"><a href="tel:+995322307316" style="text-decoration:none;font-size:11px;color:#8494a7;">+995 32 2307316</a></p>
                    <p style="margin:0 0 6px;font-size:10px;color:#5a6d7e;">10 Melikishvili str. office 12, Tbilisi 0179</p>
                    <a href="https://www.gecbusiness.com" target="_blank" style="text-decoration:none;font-size:11px;font-weight:600;color:#049978;">gecbusiness.com</a>
                </td>
            </tr>
            </table>
        </td></tr>
        </table>
    </td></tr>

    <tr><td align="center" style="padding:12px 0 8px;" bgcolor="#0d2233">
        <p style="margin:0;font-size:10px;color:#2a3f52;">&#169; GEC — Business Growth Services</p>
    </td></tr>

</table>

</td></tr>
</table>

</body>
</html>`;

exports.handler = async function(event) {
  const payload = JSON.parse(event.body);
  const data = payload.payload.data;

  const name = data.name || '';
  const recipientEmail = data.email;

  if (!recipientEmail) {
    console.log('No email provided, skipping email send');
    return { statusCode: 200, body: 'No email to send to' };
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'GEC Business Growth Services <lkereselidze@gecbusiness.com>',
      to: [recipientEmail],
      subject: 'GEC — ბიზნესის ზრდის სერვისები',
      html: emailHtml(name),
    }),
  });

  const result = await response.json();
  console.log('Resend response:', result);

  return { statusCode: response.ok ? 200 : 500, body: JSON.stringify(result) };
};

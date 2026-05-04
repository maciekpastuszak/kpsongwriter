import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const data = await resend.emails.send({
      from: "Formularz <kontakt@komu-piosenke.pl>",
      to: ["55pastuszak@gmail.com"],
      subject: subject,
      replyTo: email,
      text: `
Nowa wiadomość z formularza:

Imię: ${name}
Email: ${email}
Temat: ${subject}

${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false }, { status: 500 });
  }
}
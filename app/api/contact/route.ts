import {NextResponse} from "next/server";
import {Resend} from "resend";
import {z} from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  institution: z.string().min(1, "Institution is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

const RECIPIENT = "melitaltdsti@hotmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {error: "Validation failed", details: parsed.error.flatten()},
        {status: 400}
      );
    }
    const {name, institution, phone, email, message} = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        {error: "Email service is not configured"},
        {status: 503}
      );
    }

    const resend = new Resend(apiKey);
    const {error} = await resend.emails.send({
      from: "Melita Laundry Services <onboarding@resend.dev>",
      to: RECIPIENT,
      replyTo: email,
      subject: `İletişim formu: ${name} (${institution})`,
      text: [
        `Ad Soyad: ${name}`,
        `Kurum: ${institution}`,
        `Telefon: ${phone}`,
        `E-posta: ${email}`,
        ``,
        `Mesaj:`,
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({error: "Failed to send email"}, {status: 500});
    }

    return NextResponse.json({success: true});
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({error: "Server error"}, {status: 500});
  }
}

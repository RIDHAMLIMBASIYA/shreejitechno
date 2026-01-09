import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const TWILIO_ACCOUNT_SID = Deno.env.get("TWILIO_ACCOUNT_SID");
const TWILIO_AUTH_TOKEN = Deno.env.get("TWILIO_AUTH_TOKEN");
const TWILIO_PHONE_NUMBER = Deno.env.get("TWILIO_PHONE_NUMBER");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const smsSchema = z.object({
  phone: z.string().trim().min(10, "Phone number is required"),
  name: z.string().trim().min(1, "Name is required").max(100),
});

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    
    // Validate input
    const validationResult = smsSchema.safeParse(body);
    
    if (!validationResult.success) {
      console.error("Validation failed:", validationResult.error.errors);
      return new Response(
        JSON.stringify({ error: validationResult.error.errors[0]?.message || "Invalid input" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { phone, name } = validationResult.data;

    console.log("Sending welcome SMS to:", phone);

    // Compose the welcome message
    const message = `Welcome to Shreeji Techno, ${name}! 🎉 Thank you for reaching out. We've received your inquiry and will get back to you within 24 hours. For immediate assistance, reply to this message or call us. - Team Shreeji Techno`;

    // Send SMS via Twilio
    const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;
    
    const formData = new URLSearchParams();
    formData.append("To", phone);
    formData.append("From", TWILIO_PHONE_NUMBER!);
    formData.append("Body", message);

    const response = await fetch(twilioUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Basic ${btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`)}`,
      },
      body: formData.toString(),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Twilio API error:", responseData);
      throw new Error(responseData.message || "Failed to send SMS");
    }

    console.log("SMS sent successfully, SID:", responseData.sid);

    return new Response(
      JSON.stringify({ success: true, messageSid: responseData.sid }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-welcome-sms function:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send welcome SMS" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

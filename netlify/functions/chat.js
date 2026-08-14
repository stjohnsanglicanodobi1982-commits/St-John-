export default async (req) => {
  try {
    const { message } = await req.json();
    const apiKey = process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) return new Response(JSON.stringify({ error: "Missing API key" }), { status: 500 });
    
    const systemPrompt = `You are "St John's Assistant" for St John's Anglican Church, Odobi, Okemesi Ekiti. Founded 1982. Location: Oke Onire Street. Service: Sundays 9am-12pm. Be respectful, brief, and Anglican. User question: ${message}`;
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, { 
      method: "POST", 
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify({ contents: [{ parts: [{ text: systemPrompt }] }] }) 
    });
    const data = await response.json();
    return new Response(JSON.stringify(data), { headers: {"Content-Type": "application/json"} });
  } catch (err) { return new Response(JSON.stringify({error: err.message}), {status: 500}); }
}

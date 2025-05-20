export async function POST(req) {
  try {
    const { userMessage } = await req.json();
    
    const response = await fetch('http://localhost:11434/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: "mistral", // You can change this to any model you've pulled
        messages: [
          {
            role: "system",
            content: "You are an expert on Shadow Slave. Only answer questions about the novel."
          },
          { role: "user", content: userMessage }
        ],
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to get response from Ollama');
    }

    const data = await response.json();
    return Response.json({ content: data.message.content });
  } catch (error) {
    console.error("Ollama Error:", error);
    return Response.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
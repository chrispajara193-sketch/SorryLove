export default async function handler(req, res) {
  if (req.method === 'POST') {
    const webhookUrl = "https://discord.com/api/webhooks/1539288133890347089/loZImO2hRk_uinON93UvlGwYIXQiqFtvkxbLQK0d_f6Y_bTHeKq8T-9urmO6d4lJfczc";

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: req.body.content })
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      return res.status(500).json({ error: "Failed to send" });
    }
  }

  return res.status(405).json({ message: "Method Not Allowed" });
}
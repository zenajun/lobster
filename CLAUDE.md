# CLAUDE.md — Assistant Rules

- Use UK English in all UI copy ("colour", "organise", "favourite")
- Prefer functional components with hooks — no class components
- Don't introduce new dependencies without flagging them first
- When touching Redux, follow the existing slice pattern in `/src/features` — don't invent a new state pattern
- When touching the SharedWorker, explain any change to the message protocol (message `type` values) before applying it
- Keep explanations short in commit messages; longer reasoning goes in code comments only where genuinely non-obvious
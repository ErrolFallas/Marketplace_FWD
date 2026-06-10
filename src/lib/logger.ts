/**
 * logger.ts — Structured logger for server-side use.
 * Replaces console.* calls per reglas.md §8.
 * In production, plug this into your observability tool (e.g. Pino, Datadog).
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogEntry {
  level: LogLevel
  context: string
  message: string
  meta?: unknown
}

function formatEntry(entry: LogEntry): string {
  const ts = new Date().toISOString()
  const meta = entry.meta !== undefined ? ` ${JSON.stringify(entry.meta)}` : ''
  return `[${ts}] [${entry.level.toUpperCase()}] [${entry.context}] ${entry.message}${meta}`
}

export const logger = {
  debug(context: string, message: string, meta?: unknown): void {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(formatEntry({ level: 'debug', context, message, meta }))
    }
  },

  info(context: string, message: string, meta?: unknown): void {
    console.info(formatEntry({ level: 'info', context, message, meta }))
  },

  warn(context: string, message: string, meta?: unknown): void {
    console.warn(formatEntry({ level: 'warn', context, message, meta }))
  },

  error(context: string, message: string, meta?: unknown): void {
    console.error(formatEntry({ level: 'error', context, message, meta }))
  },
}

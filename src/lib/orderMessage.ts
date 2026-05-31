import type { CartItem } from '@/store/useCart';
import { SITE } from '@/data/penthouse';

export function buildOrderWhatsAppMessage(guestName: string, items: CartItem[], total: number) {
  const lines = items.map((i) => `• ${i.name} × ${i.qty} — ${(i.price * i.qty).toLocaleString()} XOF`);
  return `ORDER — THE PENTHOUSE

Name: ${guestName}
${lines.join('\n')}

Total: ${total.toLocaleString()} XOF`;
}

export function openWhatsAppOrder(guestName: string, items: CartItem[], total: number) {
  const msg = buildOrderWhatsAppMessage(guestName, items, total);
  window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}

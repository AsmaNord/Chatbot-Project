export function formatMoney(ammountCents) {
    return `$${(ammountCents / 100).toFixed(2)}`;
}
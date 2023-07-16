import { Url } from "url";

const facebook = new URL("https://web.facebook.com/?_rdc=1&_rdr");

console.info(facebook.toString());
console.info(facebook.href);
console.info(facebook.protocol);
console.info(facebook.host);
console.info(facebook.pathname);
console.info(facebook.searchParams);
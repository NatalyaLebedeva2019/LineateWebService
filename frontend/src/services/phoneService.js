export default function formatPhone(phone) {
  return `+7 ${phone.substr(0, 3)} ${phone.substr(3, 3)} ${phone.substr(6, 2)}-${phone.substr(8, 2)}`;
}

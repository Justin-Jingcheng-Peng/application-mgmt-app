import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

export default function ClientInfo({ client }) {
  return (
    <>
      <h5 className="mt-5">Company Information</h5>
      <ul className="list-group">
        <li className="list-group-item">{client.name}</li>
        <li className="list-group-item">{client.email}</li>
        <li className="list-group-item">{client.phone}</li>
      </ul>
    </>
  );
}

const ContactCard = ({ contact }) => {
  return (
    <div
      className="border rounded-3 p-4 bg-white shadow-sm"
    >
      <div
        className="text-success mb-3"
        style={{
          fontSize: "30px",
        }}
      >
        {contact.icon}
      </div>

      <p
        className="mb-3"
        style={{
          fontWeight: 800,
          fontSize: "20px"
        }}
      >
        {contact.title}
      </p>

      <p
        className="mb-0"
        style={{
          color: "#5d6875",
          fontSize: "18px",
        }}
      >
        {contact.value}
      </p>
    </div>
  );
};

export default ContactCard;
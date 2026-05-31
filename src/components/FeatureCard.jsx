// import React from 'react'

const FeatureCard = ({ feature }) => {
  return (
    <>
      <div className="mt-5">
        <div
          className="border rounded-2 shadow-sm ps-4 pe-4 h-100 bg-white"
          style={{
            minHeight: "250px",
          }}
        >
          <div className="fs-1 text-success mb-3 mt-3">{feature.icon}</div>
          <h5
            className="mb-4"
            style={{
              fontWeight: 800,
            }}
          >
            {feature.title}
          </h5>

          <p
            style={{
              color: "#5d6875",
              fontSize: "18px",
            }}
          >
            {feature.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;

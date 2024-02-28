// Import necessary React components and Font Awesome icons
import {
  faArrowDown,
  faArrowUp,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, CardBody } from "react-bootstrap";

// Interface defining the expected props for this component
interface Props {
  // Type of arrow icon to display (up, down, or ellipsis)
  arrowType: string;
  // Cost value to display (number)
  cost: number;
  // Number of users (number)
  users: number;
  // Optional content to be rendered inside the card (React element)
  children: React.ReactElement | any;
  // Label to display below the cost (string)
  label: string;
  // Optional custom styles to apply to the card (object)
  styles?: { bg?: string; text?: string }; // Optional property with a question mark (?)
}

// Default export of the RevenueCard component
export default function RevenueCard({
  arrowType,
  users,
  children,
  label,
  cost,
  styles,
}: Props) {
  // Function to render appropriate Font Awesome icon based on arrow type
  const renderArrowIcon = (type: string): any => {
    switch (type) {
      case "up":
        return faArrowUp;
      case "down":
        return faArrowDown;
      default:
        return faEllipsisVertical;
    }
  };

  return (
    <div className="col-sm-6 col-lg-3">
      {/* Card with background and text color based on provided styles */}
      <Card bg={styles?.bg} text={styles?.text} className="mb-4">
        {/* Card body with bottom padding, flexbox for positioning, and aligned items */}
        <CardBody className="pb-0 d-flex justify-content-between align-items-start">
          <div>
            {/* Cost value with user percentage and arrow icon */}
            <div className="fs-4 fw-semibold">
              ${cost}
              <span className="fs-6 ms-2 fw-normal">
                ({users}%{/* Render arrow icon based on arrowType */}
                <FontAwesomeIcon icon={renderArrowIcon(arrowType)} fixedWidth />
                )
              </span>
            </div>
            {/* Label displayed below the cost */}
            <div>{label}</div>
          </div>
        </CardBody>
        {/* Optional content area with fixed height */}
        <div className="mt-3 mx-3" style={{ height: "70px" }}>
          {children}
        </div>
      </Card>
    </div>
  );
}

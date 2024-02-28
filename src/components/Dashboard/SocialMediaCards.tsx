// Import necessary React components and Font Awesome icons
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card, CardBody, CardHeader } from "react-bootstrap";

// Interface defining the expected props for this component
interface Props {
  // Type of social media platform (string)
  mediaType: string;
  // Number of users reached (number)
  value: number;
  // Number of clicks on the social media post (number)
  clicks: number;
}

// Default export of the SocialMediaCards component
export default function SocialMediaCards({ value, clicks, mediaType }: Props) {
  /**
   * Renders an appropriate Font Awesome icon based on the provided media type.
   *
   * @param {string} type - The type of social media platform.
   * @returns {object} - An object containing the icon and its color.
   */
  const renderMediaIcon = (type: string): { icon: any; color: string } => {
    switch (type) {
      case "Facebook":
        return { icon: faFacebookF, color: "#3b5998" };
      case "Twitter":
        return { icon: faTwitter, color: "#00b9ff" };
      case "LinkedIn": // Corrected typo in case name
        return { icon: faLinkedinIn, color: "#0e76a8" };
      default:
        return { icon: faLinkedinIn, color: "#0e76a8" }; // Use LinkedIn icon by default
    }
  };

  return (
    <div className="col-sm-6 col-lg-4">
      <Card
        className="mb-4"
        style={
          {
            "--bs-card-cap-bg": renderMediaIcon(mediaType).color,
          } as React.CSSProperties
        }
      >
        <CardHeader className="d-flex justify-content-center align-items-center">
          <FontAwesomeIcon
            icon={renderMediaIcon(mediaType).icon}
            fixedWidth
            size="3x"
            className="my-4 text-white"
          />
        </CardHeader>
        <CardBody>
          <div className="row text-center">
            <div className="col">
              <div className="fs-5 fw-semibold">{value}</div>
              <div className="text-uppercase text-black-50 small">users</div>
            </div>
            <div className="vr p-0" />
            <div className="col">
              <div className="fs-5 fw-semibold">{clicks}</div>
              <div className="text-uppercase text-black-50 small">clicks</div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

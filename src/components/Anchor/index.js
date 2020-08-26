import React from "react";
import { Link } from "react-router-dom";
const Anchor = ({ label, path="#" }) => <Link className="pb-1 anchor" to={path}>{label}</Link>;

export default Anchor;

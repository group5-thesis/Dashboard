import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { mdiViewDashboard, mdiAccountGroup, mdiCalendar, mdiChevronUp, mdiChevronDown, mdiAirplane, mdiHumanCapacityDecrease, mdiAccountStarOutline, mdiInboxArrowDown, mdiAccountCog, mdiLogout, mdiAccountTie, mdiFolderMultiple } from "@mdi/js";
import "./sidebar.css";
import Icon from "@mdi/react";
function Sidebar(props) {
    let badgeStyle = {
        height: "12px",
        minWidth: "12px",
        marginLeft: "25px",
        marginBottom: "7px",
      };
    let {current , _navigation ,handleClick  } = props;
    return (
        <div className={`column sidebar is-sidebar-menu is-hidden-mobile `} style={{
            marginLeft: props.isOpen ? "0px" : "-260px"
        }} id="sidebar" >
            <aside className="menu mx-3 my-6">
                <center>
                    <figure className="image is-96x96">
                        <img
                            className="is-rounded"
                            src={require("assets/img/logo.svg")}
                            style={
                                {
                                    border: "white 2px solid",
                                    height: "96px",
                                    width: "96px"
                                }
                            }
                        />
                        <span
                            title="Badge top right"
                            style={badgeStyle}
                            className="badge is-bottom is-success"
                        ></span>
                    </figure>
                </center>
                <p className="menu-label">General</p>
                <div className="menu is-menu-main">
                    <ul className="menu-list">
                        {_navigation.map((item, idx) => {
                            if (item.path) {
                                return (
                                    <li
                                        className="is-right"
                                        key={idx}
                                        onClick={() => {
                                            handleClick();
                                        }}
                                    >
                                        <Link
                                            className={`mb-2 	${
                                                current === "/admin" + item.path ? "is-active" : ""
                                                }`}
                                            to={"/admin" + item.path}
                                        >
                                            <span className="mb-5 has-text-centered">
                                                <Icon path={item.icon} size={0.6} />{" "}{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            }
                            else {
                                return (
                                    <li key={"main." + idx} onClick={() => {
                                        handleClick(true, {
                                            id: idx,
                                            collapsed: !item.collapsed
                                        });
                                    }}>
                                        <a
                                            className={`mb-2 	${
                                                (current.includes(item.route) && !item.collapsed) ?
                                                    "is-active" : ""
                                                }`
                                            }>
                                            <span className=" pb-5 has-text-centered">
                                                <Icon path={item.icon} size={0.6} />{" "}{item.title}
                                            </span>
                                            {" "}<Icon path={item.collapsed ? mdiChevronUp : mdiChevronDown} size={0.5}></Icon>{" "}

                                        </a>
                                        {(function () {
                                            if (item.collapsed) {
                                                let obj = {
                                                    id: idx,
                                                    collapsed: !item.collapsed
                                                };
                                                return (
                                                    <ul>
                                                        {
                                                            item.children.map((child, id) => {
                                                                return (
                                                                    <li
                                                                        className="is-right"
                                                                        key={"sub." + id + idx}
                                                                        onClick={() => {
                                                                            handleClick(true, obj);
                                                                        }}
                                                                    >
                                                                        <Link
                                                                            className={`mb-2 	${
                                                                                current === "/admin" + item.route + child.path ? "is-active" : ""
                                                                                }`}
                                                                            to={"/admin" + item.route + child.path}
                                                                        >
                                                                            <Icon path={child.icon} size={0.6}></Icon>{" "}
                                                                            <span className=" has-text-centered">{child.title}</span>
                                                                        </Link>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                )
                                            }
                                        })()}
                                    </li>
                                )
                            }
                        })}
                        <li
                            className="is-right"
                            onClick={() => {
                                props.redux.doLogout()
                            }}
                        >
                            <a
                                className={`mb-2`}
                            >
                                <Icon path={mdiLogout} size={0.6}></Icon>{" "}
                                <span className=" has-text-centered">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>

    );
}
export default Sidebar;
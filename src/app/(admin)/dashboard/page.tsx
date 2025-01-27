"use client";

import RiskContainerItem from "@/components/dashboard/RiskContainerItem";
import RiskContainerServer from "@/components/dashboard/RiskContainerServer";
import Server from "@/components/dashboard/Server";
import ServerStatus from "@/components/dashboard/ServerStatus";
import CustomEdge from "@/components/workflow/CustomEdge";
import ServerInfo from "@/components/workflow/ServerInfo";
import ServerState from "@/components/workflow/ServerState";
import ServerUsers from "@/components/workflow/ServerUsers";
import { DescriptionItems } from "@/constants/DescriptionItems.constants";
import { RiskItems } from "@/constants/RiskItems.constants";
import { ServerStatuses } from "@/constants/ServerStatuses.constants";
import { initialEdges, initialNodes } from "@/constants/Workflow.constants";
import { serverData as servers } from "@/db/serverData";
import { auth } from "@/firebase/firebaseConfig";
import { paginate } from "@/helpers/pagination";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ReactFlow, {
  Connection,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import DescriptionItem from "../../../components/dashboard/DescriptionItem";
import "../../../styles/globals.css";

const nodeTypes = {
  "server-users": ServerUsers,
  "server-1": ServerInfo,
  "server-2": ServerInfo,
  "server-state": ServerState,
};

const edgeTypes = {
  customEdge: CustomEdge,
};

const rowsPerPage = 2;

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const { totalPages, currentRows } = paginate(
    servers,
    currentPage,
    rowsPerPage
  );

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * rowsPerPage + 1;
  const endIndex = Math.min(currentPage * rowsPerPage, servers.length);

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
    if (!user && !userSession) {
      router.push("/signin");
    }
  }, []);

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        animated: true,
        id: `${edges.length + 1}`,
        type: "customEdge",
      };
      setEdges((prevEgdes: any) => addEdge(edge, prevEgdes));
    },
    [setEdges]
  );

  return (
    <div className="container">
      {/* Description */}
      <div className="description">
        {/* Intro section */}
        <div className="intro-wrapper">
          <h3>
            Server Status Overview
          </h3>
          <p className="intro-text">
            Our servers are running at peak efficiency, ensuring seamless
            connectivity across the globe. From monitoring to analytics, every
            server operates with precision to deliver a reliable experience for
            our users. Stay informed with real-time updates as we safeguard your
            data and maintain operational excellence. We're committed to
            detecting risks early and resolving issues before they affect
            performance. At Astelia, uptime isn't just a goal; it's a promise.
          </p>

          <div className="intro-wrapper-2">
            <h3>Extra</h3>
            <p className="intro-text">
              Step into the heart of server dynamics! We go beyond the basics to
              provide deep insights and proactive measures, ensuring you're
              always ahead of potential disruptions. Whether it's server load
              balancing, critical updates, or robust cybersecurity measures, our
              systems are designed to adapt and thrive. As we innovate and
              improve, your experience remains our top priority. Together, let's
              create a digital environment that's secure, efficient, and
              future-ready.
            </p>
          </div>
        </div>

        {/* Description section */}
        <div className="description-wrapper">
          {DescriptionItems.map(
            ({ heading, icon, iconColor, isIcon, text }) => (
              <DescriptionItem
                key={heading}
                heading={heading}
                icon={icon}
                iconColor={iconColor}
                isIcon={isIcon}
                text={text}
              />
            )
          )}
        </div>

        {/* Servers section */}
        <div className="servers-wrapper">
          <p className="servers-heading">Active Servers</p>

          <div className="servers-wrapper-flex">
            {servers.map(({ name, ip, description }) => (
              <Server
                key={name}
                name={name}
                text={name}
                text2={ip}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Workflow */}
      <div className="graph">
        {/* Flowchart */}
        <div className="flowchart-container">
          <p className="flowchart-heading">Servers</p>

          <div className="flowchart-wrapper">
            <div className="flowchart-chart-wrapper">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onConnect={onConnect}
                fitView
              ></ReactFlow>
            </div>

            <div className="flowchart-status-wrapper">
              {ServerStatuses.map(({ name, icon, status }) => (
                <ServerStatus
                  key={name}
                  name={name}
                  icon={icon}
                  status={status}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Graph */}
        <div className="graph-container">
          <p className="graph-container-heading">Servers Risk Analytics</p>

          <div className="risk-wrapper">
            {/* Risk container */}
            <div className="risk-container">
              <div className="risk-container-header">
                <p className="risk-container-header-text">Asset</p>
                <p className="risk-container-header-text">Contextual Risk</p>
              </div>

              <div className="risk-container-servers">
                {currentRows.map(({ name, ip, risk }) => (
                  <RiskContainerServer
                    key={name}
                    name={name}
                    text={ip}
                    risk={risk}
                  />
                ))}
              </div>

              <div className="pagination-container">
                <FaChevronLeft
                  className="chevron-back"
                  color={currentPage === 1 ? "#C2C6CE" : "#000"}
                  size={12}
                  onClick={handlePrevious}
                  style={{
                    cursor: currentPage > 1 ? "pointer" : "not-allowed",
                  }}
                />
                <span className="pagination-info">
                  Showing {startIndex} - {endIndex} of {servers.length}
                </span>
                <FaChevronRight
                  className="chevron-forward"
                  color={currentPage === totalPages ? "#C2C6CE" : "#000"}
                  size={12}
                  onClick={handleNext}
                  style={{
                    cursor:
                      currentPage < totalPages ? "pointer" : "not-allowed",
                  }}
                />
              </div>
            </div>

            {/* Risk graph */}
            <div className="risk-graph-container">
              <div className="risk-graph-container-header">
                <p className="risk-graph-container-header-text">
                  Contextual Risk
                </p>
              </div>

              <div className="risk-graph-flex">
                <div className="risk-graph-flex-container">
                  {RiskItems.map(({ icon, value, status }) => (
                    <RiskContainerItem
                      key={status}
                      icon={icon}
                      value={value}
                      status={status}
                    />
                  ))}
                </div>
                <div className="risk-graph-value">2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

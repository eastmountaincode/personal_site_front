import React from 'react';
import { useNavigate } from 'react-router-dom';
import CollapsibleSidebarItem from '../CollapsibleSidebarItem';

function Sidebar({ selectSidebarOption }) {
  let navigate = useNavigate();

  const handleSidebarItemClick = (itemRoute) => {
    navigate(`${itemRoute}`);
  };

  return (
    <div className="sidebar" style={{ textAlign: "left" }}>
      <div className='name_header'>
        <p className="sidebar-link-header" onClick={() => handleSidebarItemClick('/')}>Andrew Boylan</p>
      </div>
      <div className='sidebar_elements'>
        {/* PROJECTS */}
        <CollapsibleSidebarItem label="Projects">
          <div style={{ display: "flex" }}>
            <span>➮</span>
            <p className="sidebar-link" onClick={() => handleSidebarItemClick('/projects/virtualLittleFreeLibrary')}>Virtual Little Free Library</p>
          </div>
          <div style={{ display: "flex" }}>
            <span>➮</span>
            <p className="sidebar-link" onClick={() => handleSidebarItemClick('/projects/bodyLanguageCollaborativeCollage')}>Body Language: A Collaborative Collage</p>
          </div>
        </CollapsibleSidebarItem>

        {/* RESOURCES AND TOOLS */}
        <CollapsibleSidebarItem label="Resources / Tools">
          <div style={{ display: "flex" }}>
            <span>➮</span>
            <p className="sidebar-link" onClick={() => handleSidebarItemClick('/resources_tools/fileDepolarizer')}>File Depolarizer</p>
          </div>
        </CollapsibleSidebarItem>

        <CollapsibleSidebarItem label="Bioinformatics">
        </CollapsibleSidebarItem>

        <CollapsibleSidebarItem label="Music">
        </CollapsibleSidebarItem>

        <CollapsibleSidebarItem label="About">
        </CollapsibleSidebarItem>
      </div>
    </div>
  );
}

export default Sidebar;


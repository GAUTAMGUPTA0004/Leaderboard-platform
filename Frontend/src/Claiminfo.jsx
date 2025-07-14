import React from 'react';
import './ClaimInfo.css';

// Component to display feedback of claimed points
function ClaimInfo({ points }) {
  return points !== null ? <div className="claim-info">🎉 You claimed <strong>{points}</strong> points!</div> : null;
}

export default ClaimInfo;
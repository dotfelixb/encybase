import React, { FC } from 'react';

interface IDashboard {}

export const Dashboard : FC<IDashboard> = () => {
  return ( <div style={{
    backgroundColor:"white",padding:"50px"
  }}>Dashboard</div> )
}

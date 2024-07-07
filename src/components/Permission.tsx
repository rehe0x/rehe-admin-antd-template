import React from 'react';
import { useAuth } from "@/stores/AuthContext";

interface PermissionProps {
  code: string[];
  children: React.ReactNode;
}

export const Permission: React.FC<PermissionProps> = ({ code, children }) => {
  const { permissions } = useAuth();

  // 如果没有提供code或者提供的code为空，则直接渲染children
  if (!code || code.length === 0) {
    return <>{children}</>;
  }

  // 检查用户的权限是否包含在提供的code中
  const hasPermission = code.some(c => permissions.includes(c));

  // 如果用户有权限，则渲染children
  return hasPermission ? <>{children}</> : null;
};
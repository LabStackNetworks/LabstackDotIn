import { useEffect } from 'react';
import { injectStructuredData } from '@/lib/structured-data';

interface StructuredDataWrapperProps {
  data: object | object[];
  children: React.ReactNode;
}

export const StructuredDataWrapper = ({ data, children }: StructuredDataWrapperProps) => {
  useEffect(() => {
    const cleanup = injectStructuredData(data);
    return cleanup;
  }, [data]);

  return <>{children}</>;
};

import { request } from 'network';
import { useEffect, useState } from 'react';

export function useTag() {
  const [dataTegs, setDataTeg] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    request({ method: 'GET', url: '/tags' })
      .then((data) => {
        setDataTeg(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    dataTegs,
    loading,
  };
}

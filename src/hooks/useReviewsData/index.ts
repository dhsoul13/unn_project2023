import { request } from 'network';
import React, { useEffect, useState, useCallback } from 'react';
import { getRaitingNumber } from 'utils/getRaitingNumber';

export function useReviewsData(number: string | undefined): [
  {
    id: number;
    product_id: number;
    user_id: number;
    text: string;
    raiting: number;
  },
  boolean,
  () => void,
  () => void,
  boolean,
  object
] {
  const [reviews, setReviews] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<number>(2);
  const [globalRaiting, setGlobalRaiting] = useState<object>({});
  const [isMore, setIsMore] = useState<boolean>(true);
  useEffect(() => {
    request({
      url: '/reviews',
      params: {
        _limit: show,
        product_id: number,
      },
    })
      .then((el) => {
        if (el.length !== show) {
          setIsMore(false);
        }

        setReviews(el);
        setLoading(false);
      })
      .catch((el) => {
        setLoading(false);
      });
  }, [show]);

  useEffect(() => {
    request({
      url: '/reviews',
      params: {
        product_id: number,
      },
    })
      .then((el) => {
        setGlobalRaiting({
          count: el.length,
          reviewsCount: getRaitingNumber({
            data: el,
            length: el.length,
          }),
        });
      })
      .catch((el) => {
        setLoading(false);
      });
  }, []);

  const handlerShowReviews = useCallback(() => {
    setShow((perv) => perv + 2);
  }, []);

  const handlerCloseReviews = useCallback(() => {
    setShow(2);
    setIsMore(true);
  }, []);

  return [reviews, loading, handlerShowReviews, handlerCloseReviews, isMore, globalRaiting];
}

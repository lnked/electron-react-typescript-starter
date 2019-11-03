import * as React from 'react';

import { List, ListItem, Button } from './styled';

export interface OuterProps {
  page?: number;
  limit: number;
  total: number;
  onClick?: (page: number) => void;
}

const Pagination: React.FC<OuterProps> = ({ page, limit, total, onClick, ...props }) => {
  const pages = total / limit;

  return (
    <List {...props}>
      {Array(pages).fill(0).map((_, idx) => {
        const current = idx + 1;
        const className = (page === current && 'current') || '';

        return (
          <ListItem key={`${idx}`}>
            <Button className={className} onClick={() => onClick && onClick(current)}>
              {current}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

Pagination.defaultProps = {
  page: 1,
  limit: 10,
};

export default Pagination;

import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Crumb } from '../../types/Breadcrumbs';

type Props = {
  crumbs: Array<Crumb>;
};

const Breadcrumbs = ({ crumbs }: Props) => {
  if (crumbs.length <= 1) return null;

  return (
    <Breadcrumb>
      {crumbs.map(({ name, path, icon }, key) =>
        key + 1 === crumbs.length ? (
          <BreadcrumbItem key={key}>
            <i className={icon} />
            &nbsp;&nbsp;{name}
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={key}>
            <a href={path}>
              <i className={icon} />
              &nbsp;&nbsp;{name}
            </a>
          </BreadcrumbItem>
        )
      )}
    </Breadcrumb>
  );
};

export default Breadcrumbs;

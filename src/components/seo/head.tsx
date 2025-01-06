import { Helmet, HelmetData } from 'react-helmet-async';

type HeadProps = {
  title?: string;
  description?: string;
};

const helmetData = new HelmetData({});

export const Head = ({ description = '' }: HeadProps = {}) => {
  return (
    <Helmet
      helmetData={helmetData}
      title={'ILMS'}
      defaultTitle="Bulletproof React"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};

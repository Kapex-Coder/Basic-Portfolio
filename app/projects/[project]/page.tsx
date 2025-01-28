import React from "react";

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  return <div>Project Details {`${slug}`}</div>;
};

export default ProjectDetails;

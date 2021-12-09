const callApi = () => {
  return fetch(
    'http://challenges-asset-files.s3.us-east-2.amazonaws.com/jobMadrid/companies.json'
  )
    .then((response) => response.json())
    .then((dataApi) => {
      const companies = dataApi.map((data) => {
        return {
          id: data.id,
          website: data.website === null ? 'unknown' : data.website,
          name: data.name === null ? 'unknown' : data.name,
          founded: data.founded === null ? 'unknown' : data.founded,
          size: data.size === null ? 'unknown' : data.size,
          locality: data.locality === null ? 'unknown' : data.locality,
          region: data.region === null ? 'unknown' : data.region,
          country: data.country === null ? 'unknown' : data.country,
          industry: data.industry === null ? 'unknown' : data.industry,
          linkedin_url:
            data.linkedin_url === null ? 'unknown' : data.linkedin_url,
        };
      });
      return companies;
    });
};

export default callApi;

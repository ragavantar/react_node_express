import React, { useEffect } from 'react';

const Api = () => {

  useEffect(() => {
    fetch(`/api`)
      .then(resp => resp.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }, [])

    return (
        <div>
            Fetching from api
        </div>
    );
}

export default Api;
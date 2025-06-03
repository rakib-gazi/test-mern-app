

const Shops = () => {
   const getSubdomain = () => {
    const hostname = window.location.hostname;
    const parts = hostname.split('.');
    if (parts.length === 2 && parts[1] === 'localhost') {
      return parts[0];
    }
    return null;
  };

  const shopDashboard = getSubdomain();



    return (
        <div style={{ padding: '2rem', textAlign: 'center', fontWeight: '600', fontSize: '1.25rem' }}>
            This is {shopDashboard} shop
        </div>
    );
};

export default Shops;
// import { useEffect, useState } from 'react';
// import firebase from '@/utils/firebase'; // Adjust path as per your project setup


// const useFirebaseAnalytics = () => {
//   const [analytics, setAnalytics] = useState<firebase.analytics.Analytics | null>(null);

//   useEffect(() => {
//     // Ensure Firebase Analytics is initialized
//     const analyticsInstance = firebase.analytics();

//     if (analyticsInstance) {
//       setAnalytics(analyticsInstance);
//       analyticsInstance.setAnalyticsCollectionEnabled(true);
//       analyticsInstance.logEvent('page_view');
//     }

//     return () => {
//       // Clean up if needed
//     };
//   }, []);

//   return {
//     analytics,
//   };
// };

// export default useFirebaseAnalytics;

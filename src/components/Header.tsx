   // Scroll to top when route changes
   useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
+    window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [location.pathname]);
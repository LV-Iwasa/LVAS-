@@ .. @@
   // Scroll to top when route changes
   useEffect(() => {
-    window.scrollTo(0, 0);
+    window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [location.pathname]);
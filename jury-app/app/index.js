import { Redirect, useRootNavigationState } from "expo-router";

export default index = () => {
  const rootNavigationState = useRootNavigationState();
  // const [executed, setExecuted] = useState(false);
  // const { user } = useContext(AuthContext);
  // const router = useRouter();

  // useEffect(() => {
  //   if (executed) return;

  //   const timeoutId = setTimeout(() => {
  //     if (user?.token) {
  //       router.replace("/games");
  //     } else {
  //       router.replace("/login");
  //     }
  //     setExecuted(true);
  //   }, 5000);

  //   return () => clearTimeout(timeoutId);
  // }, [user?.token, executed, router, setExecuted]);

  if (!rootNavigationState?.key) return null;

  return <Redirect href={"/pre-login"} />;
};

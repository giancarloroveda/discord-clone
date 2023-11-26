const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="font-bold text-white bg-slate-900 text-center">
        Auth Section
      </h1>
      {children}
    </div>
  );
};

export default AuthLayout;

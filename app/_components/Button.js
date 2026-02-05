function Button({ children }) {
  return (
    <button className="px-6 py-3 rounded-full bg-charcoal-900 text-offwhite-100 hover:bg-charcoal-700 hover:text-gold-300">
      {children}
    </button>
  );
}

export default Button;

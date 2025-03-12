export default function FooterLinks() {
  return (
    <>
      <div>
        <h4 className="text-white font-semibold">TOP 4 CATEGORY</h4>
        <ul className="text-gray-400 text-sm mt-2 space-y-1">
          <li>Development</li>
          <li>Finance & Accounting</li>
          <li>Design</li>
          <li>Business</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold">QUICK LINKS</h4>
        <ul className="text-gray-400 text-sm mt-2 space-y-1">
          <li>About</li>
          <li className="hover:text-primary-500 flex items-center">
            Become Instructor →
          </li>
          <li>Contact</li>
          <li>Career</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold">SUPPORT</h4>
        <ul className="text-gray-400 text-sm mt-2 space-y-1">
          <li>Help Center</li>
          <li>FAQs</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </>
  );
}

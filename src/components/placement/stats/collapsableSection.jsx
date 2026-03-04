// import { useState, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';
// import styles from './collapsibleWrapper.module.css';

// const useIsDesktop = () => {
//   const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth > 468 : true);
  
//   useEffect(() => {
//     const handleResize = () => setIsDesktop(window.innerWidth > 468);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
  
//   return isDesktop;
// };

// export const CollapsibleWrapper = ({ 
//   icon: Icon, 
//   title, 
//   subtitle,
//   children, 
//   defaultOpen: Value,
//   actions,
//   legend 
// }) => {
//   const isDesktop = useIsDesktop();
//   const [isOpen, setIsOpen] = useState(isDesktop ? true : Value);
  
//   useEffect(() => {
//     setIsOpen(isDesktop ? true : Value);
//   }, [isDesktop, Value]);

//   return (
//     <div className={styles.collapsibleSection}>
//       <button 
//         className={`${styles.collapsibleHeader} ${isOpen ? styles.active : ''}`}
//         onClick={() => setIsOpen(!isOpen)}
//         aria-expanded={isOpen}
//       >
//         <div className={styles.collapsibleHeaderLeft}>
//           {Icon && (
//             <div className={styles.collapsibleIcon}>
//               <Icon size={28} strokeWidth={1.5} />
//             </div>
//           )}
//           <div className={styles.titleWrapper}>
//             <h3 className={styles.collapsibleTitle}>{title}</h3>
//             {subtitle && <p className={styles.collapsibleSubtitle}>{subtitle}</p>}
//           </div>
//         </div>
//         <div className={styles.headerRight}>
//           {/* Desktop: show legend and actions in header */}
//           {legend && <div className={styles.legendWrapperDesktop}>{legend}</div>}
//           {actions && <div className={styles.actionsWrapperDesktop}>{actions}</div>}
//           <div className={`${styles.collapsibleArrow} ${isOpen ? styles.rotated : ''}`}>
//             <ChevronDown size={20} strokeWidth={2} />
//           </div>
//         </div>
//       </button>
      
//       <div className={`${styles.collapsibleContent} ${isOpen ? styles.expanded : ''}`}>
//         {/* Mobile: show legend and actions below header when expanded */}
//         {(legend || actions) && (
//           <div className={styles.mobileActionsBar}>
//             {legend && <div className={styles.legendWrapperMobile}>{legend}</div>}
//             {actions && <div className={styles.actionsWrapperMobile}>{actions}</div>}
//           </div>
//         )}
//         <div className={styles.collapsibleContentInner}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CollapsibleWrapper;
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './collapsibleWrapper.module.css';

export const CollapsibleWrapper = ({ 
  icon: Icon, 
  title, 
  subtitle,
  children, 
  defaultOpen = false,
  actions,
  legend,
  onToggle
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleHandler = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      if (onToggle) onToggle(newState);
      return newState;
    });
  };

  return (
    <div className={styles.collapsibleSection}>
      <div
        className={`${styles.collapsibleHeader} ${isOpen ? styles.active : ''}`}
        onClick={toggleHandler}
      >
        <div className={styles.collapsibleHeaderLeft}>
          {Icon && (
            <div className={styles.collapsibleIcon}>
              <Icon size={28} />
            </div>
          )}
          <div className={styles.titleWrapper}>
            <h3 className={styles.collapsibleTitle}>{title}</h3>
            {subtitle && <p className={styles.collapsibleSubtitle}>{subtitle}</p>}
          </div>
        </div>

        <div className={styles.headerRight}>
          <div className={styles.legendWrapperDesktop}>{legend}</div>
          <div className={styles.actionsWrapperDesktop}>{actions}</div>
          <div className={`${styles.collapsibleArrow} ${isOpen ? styles.rotated : ''}`}>
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      <div className={`${styles.collapsibleContent} ${isOpen ? styles.expanded : ''}`}>
        {isOpen && (actions || legend) && (
          <div className={styles.mobileActionsBar}>
            <div className={styles.legendWrapperMobile}>{legend}</div>
            <div className={styles.actionsWrapperMobile}>{actions}</div>
          </div>
        )}
        <div className={styles.collapsibleContentInner}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleWrapper;

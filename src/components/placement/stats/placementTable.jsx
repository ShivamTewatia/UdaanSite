import { useState, useMemo } from 'react';
import { Briefcase, Users, TrendingUp, Award, ArrowUp, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import CollapsibleWrapper from './collapsableSection';
import styles from './placementTable.module.css';

export const PlacementTable = ({ courses, year }) => {
  const [sortField, setSortField] = useState('placementPercent');
  const [sortDirection, setSortDirection] = useState('desc');
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('desc');
    }
  };

  const sortedCourses = useMemo(() => {
    return [...courses].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const mod = sortDirection === 'asc' ? 1 : -1;
      if (typeof aVal === 'string' && typeof bVal === 'string') return aVal.localeCompare(bVal) * mod;
      return (aVal - bVal) * mod;
    });
  }, [courses, sortField, sortDirection]);

  const totals = useMemo(() => {
    const totalEligible = courses.reduce((s, d) => s + d.eligibleStudents, 0);
    const totalPlaced = courses.reduce((s, d) => s + d.placed, 0);
    const avgPlacement = Math.round((totalPlaced / totalEligible) * 100);
    const highestPackage = Math.max(...courses.map((d) => d.highestPackage));
    const avgPackage = (courses.reduce((s, d) => s + d.averagePackage, 0) / courses.length).toFixed(2);
    return { totalEligible, totalPlaced, avgPlacement, highestPackage, avgPackage };
  }, [courses]);

  const getColor = (pct) => {
    if (pct >= 90) return 'high';
    if (pct >= 75) return 'mid';
    if (pct >= 60) return 'fair';
    return 'low';
  };

  const SortIcon = ({ field }) => {
    if (sortField !== field) return null;
    return sortDirection === 'desc' ? (
      <ArrowDown size={10} className={styles.sortIcon} />
    ) : (
      <ArrowUp size={10} className={styles.sortIcon} />
    );
  };

  const dotStyles = { high: styles.dotHigh, mid: styles.dotMid, fair: styles.dotFair, low: styles.dotLow };
  const badgeStyles = { high: styles.badgeHigh, mid: styles.badgeMid, fair: styles.badgeFair, low: styles.badgeLow };
  const progressStyles = { high: styles.progressHigh, mid: styles.progressMid, fair: styles.progressFair, low: styles.progressLow };

  const PackageCell = ({ value, bold = false }) => (
    <span className={styles.packageCell}>
      <span className={bold ? styles.packageValueBold : styles.packageValue}>₹{value}</span>
      <span className={styles.packageUnit}>LPA</span>
    </span>
  );

  const badge = (
    <div className={styles.actionsBadge}>
      <span className={styles.actionsBadgeLabel}>Avg Placement:</span>
      <span className={styles.actionsBadgeValue}>{totals.avgPlacement}%</span>
    </div>
  );

  const columns = [
    { field: 'course', label: 'Course', icon: null, align: 'left', hide: false },
    { field: 'eligibleStudents', label: 'Eligible', icon: Users, align: 'center', hide: true },
    { field: 'placed', label: 'Placed', icon: Award, align: 'center', hide: false },
    { field: 'placementPercent', label: 'Placement', icon: TrendingUp, align: 'center', hide: false },
    { field: 'highestPackage', label: 'Highest Pkg', icon: null, align: 'center', hide: false },
    { field: 'averagePackage', label: 'Avg Pkg', icon: null, align: 'center', hide: false },
  ];

  return (
    <CollapsibleWrapper
      icon={Briefcase}
      title="Department-wise Placement Details"
      subtitle={year ? `Academic Year ${year}` : 'Click headers to sort'}
      defaultOpen={true}
      actions={badge}
    >
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.field}
                  onClick={() => handleSort(col.field)}
                  className={[
                    styles.th,
                    sortField === col.field ? styles.thActive : '',
                    col.align === 'left' ? styles.thLeft : styles.thCenter,
                    col.hide ? styles.thHiddenSm : '',
                  ].filter(Boolean).join(' ')}
                >
                  <span className={styles.thInner}>
                    {col.icon && <col.icon size={11} className={styles.thIcon} />}
                    {col.label}
                    <SortIcon field={col.field} />
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedCourses.map((c, i) => {
              const color = getColor(c.placementPercent);
              const isHovered = hoveredRow === c.course;
              return (
                <motion.tr
                  key={c.course}
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.03 }}
                  onMouseEnter={() => setHoveredRow(c.course)}
                  onMouseLeave={() => setHoveredRow(null)}
                  className={`${styles.row} ${isHovered ? styles.rowHovered : ''}`}
                >
                  <td className={styles.td}>
                    <div className={styles.courseCell}>
                      <span className={`${styles.dot} ${dotStyles[color]}`} />
                      <span className={styles.courseName}>{c.course}</span>
                    </div>
                  </td>

                  <td className={`${styles.td} ${styles.tdHiddenSm}`}>
                    <span className={styles.numericValue}>{c.eligibleStudents}</span>
                  </td>

                  <td className={`${styles.td} ${styles.tdCenter}`}>
                    <span className={styles.numericValue}>{c.placed}</span>
                  </td>

                  <td className={`${styles.td} ${styles.tdCenter}`}>
                    <div className={styles.placementCell}>
                      <div className={styles.progressTrack}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${c.placementPercent}%` }}
                          transition={{ duration: 0.6, delay: i * 0.04 }}
                          className={`${styles.progressFill} ${progressStyles[color]}`}
                        />
                      </div>
                      <span className={`${styles.badge} ${badgeStyles[color]}`}>
                        {c.placementPercent}%
                      </span>
                    </div>
                  </td>

                  <td className={`${styles.td} ${styles.tdCenter}`}>
                    <PackageCell value={c.highestPackage} bold />
                  </td>

                  <td className={`${styles.td} ${styles.tdCenter}`}>
                    <PackageCell value={c.averagePackage} />
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
          <tfoot className={styles.tfoot}>
            <tr>
              <td className={styles.td}>
                <span className={styles.footerLabel}>Total</span>
              </td>
              <td className={`${styles.td} ${styles.tdHiddenSm}`}>
                <span className={styles.footerValue}>{totals.totalEligible}</span>
              </td>
              <td className={`${styles.td} ${styles.tdCenter}`}>
                <span className={styles.footerValue}>{totals.totalPlaced}</span>
              </td>
              <td className={`${styles.td} ${styles.tdCenter}`}>
                <span className={styles.footerBadge}>{totals.avgPlacement}%</span>
              </td>
              <td className={`${styles.td} ${styles.tdCenter}`}>
                <span className={styles.packageCell}>
                  <span className={styles.footerPackageValue}>₹{totals.highestPackage}</span>
                  <span className={styles.packageUnit}>LPA</span>
                </span>
              </td>
              <td className={`${styles.td} ${styles.tdCenter}`}>
                <span className={styles.packageCell}>
                  <span className={styles.footerPackageValue}>₹{totals.avgPackage}</span>
                  <span className={styles.packageUnit}>LPA</span>
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </CollapsibleWrapper>
  );
};

export default PlacementTable;

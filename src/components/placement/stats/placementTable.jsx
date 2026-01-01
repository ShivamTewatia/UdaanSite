import * as React from "react";
import { useState, useMemo } from "react";
import { Users, Briefcase, TrendingUp, Award } from "lucide-react";
import styles from "./placementTable.module.css";

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <tfoot ref={ref} className={className} {...props} />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr ref={ref} className={cn("border-b transition-colors", className)} {...props} />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th ref={ref} className={cn("h-12 px-4 text-left align-middle font-medium", className)} {...props} />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td ref={ref} className={cn("p-4 align-middle", className)} {...props} />
));
TableCell.displayName = "TableCell";

export const PlacementTable = ({ courses }) => {
  const [sortField, setSortField] = useState("placementPercent");
  const [sortDirection, setSortDirection] = useState("desc");
  const [hoveredRow, setHoveredRow] = useState(null);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedCourses = useMemo(() => {
    return [...courses].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      const modifier = sortDirection === "asc" ? 1 : -1;
      if (typeof aVal === "string" && typeof bVal === "string") {
        return aVal.localeCompare(bVal) * modifier;
      }
      return (aVal - bVal) * modifier;
    });
  }, [courses, sortField, sortDirection]);

  const totals = useMemo(() => {
    const totalEligible = courses.reduce((sum, d) => sum + d.eligibleStudents, 0);
    const totalOffers = courses.reduce((sum, d) => sum + d.offers, 0);
    const avgPlacement = Math.round((totalOffers / totalEligible) * 100);
    const highestPackage = Math.max(...courses.map(d => d.highestPackage));
    const avgPackage = (courses.reduce((sum, d) => sum + d.averagePackage, 0) / courses.length).toFixed(2);
    return { totalEligible, totalOffers, avgPlacement, highestPackage, avgPackage };
  }, [courses]);

  const getPlacementColor = (percent) => {
    if (percent >= 90) return "Excellent";
    if (percent >= 75) return "Good";
    if (percent >= 60) return "Average";
    return "Low";
  };

  const getSortIcon = (field) => {
    if (sortField !== field) return null;
    return sortDirection === "desc" ? " ↓" : " ↑";
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h3 className={styles.title}>
            <Briefcase size={18} className={styles.titleIcon} />
            Department-wise Placement Details
          </h3>
          <p className={styles.subtitle}>Click on headers to sort • Hover for highlights</p>
        </div>
        <div className={styles.avgBadge}>
          <span className={styles.avgLabel}>Avg Placement:</span>
          <span className={styles.avgValue}>{totals.avgPlacement}%</span>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <Table>
          <TableHeader>
            <TableRow className={styles.headerRow}>
              <TableHead className={styles.th} onClick={() => handleSort("course")}>
                Course{getSortIcon("course")}
              </TableHead>
              <TableHead className={`${styles.th} ${styles.thCenter}`} onClick={() => handleSort("eligibleStudents")}>
                <div className={styles.thContent}>
                  <Users size={14} className={styles.thIcon} /> Eligible{getSortIcon("eligibleStudents")}
                </div>
              </TableHead>
              <TableHead className={`${styles.th} ${styles.thCenter}`} onClick={() => handleSort("offers")}>
                <div className={styles.thContent}>
                  <Briefcase size={14} className={styles.thIcon} /> Offers{getSortIcon("offers")}
                </div>
              </TableHead>
              <TableHead className={`${styles.th} ${styles.thCenter}`} onClick={() => handleSort("placementPercent")}>
                <div className={styles.thContent}>
                  <TrendingUp size={14} className={styles.thIcon} /> Placement %{getSortIcon("placementPercent")}
                </div>
              </TableHead>
              <TableHead className={`${styles.th} ${styles.thCenter}`} onClick={() => handleSort("highestPackage")}>
                <div className={styles.thContent}>
                  <Award size={14} className={styles.thIcon} /> Highest{getSortIcon("highestPackage")}
                </div>
              </TableHead>
              <TableHead className={`${styles.th} ${styles.thCenter}`} onClick={() => handleSort("averagePackage")}>
                Average{getSortIcon("averagePackage")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedCourses.map((course, index) => {
              const colorClass = getPlacementColor(course.placementPercent);
              return (
                <TableRow
                  key={course.course}
                  className={`${styles.row} ${hoveredRow === course.course ? styles.rowHovered : ""}`}
                  onMouseEnter={() => setHoveredRow(course.course)}
                  onMouseLeave={() => setHoveredRow(null)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell className={styles.td}>
                    <div className={styles.courseName}>
                      <div className={`${styles.dot} ${styles[`dot${colorClass}`]}`} />
                      {course.course}
                    </div>
                  </TableCell>
                  <TableCell className={`${styles.td} ${styles.tdCenter}`}>{course.eligibleStudents}</TableCell>
                  <TableCell className={`${styles.td} ${styles.tdCenter}`}>
                    <span className={styles.offersValue}>{course.offers}</span>
                  </TableCell>
                  <TableCell className={`${styles.td} ${styles.tdCenter}`}>
                    <div className={styles.progressWrapper}>
                      <div className={`${styles.progressBar} ${styles[`progressBg${colorClass}`]}`}>
                        <div 
                          className={`${styles.progressFill} ${styles[`progress${colorClass}`]}`}
                          style={{ width: `${course.placementPercent}%` }}
                        />
                      </div>
                      <span className={`${styles.percentBadge} ${styles[`badge${colorClass}`]}`}>
                        {course.placementPercent}%
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className={`${styles.td} ${styles.tdCenter}`}>
                    <span className={styles.packageHighest}>₹{course.highestPackage}</span>
                    <span className={styles.packageUnit}> LPA</span>
                  </TableCell>
                  <TableCell className={`${styles.td} ${styles.tdCenter}`}>
                    <span className={styles.packageAvg}>₹{course.averagePackage}</span>
                    <span className={styles.packageUnit}> LPA</span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow className={styles.footerRow}>
              <TableCell className={styles.tdFooter}>
                <span className={styles.totalLabel}>Total</span>
              </TableCell>
              <TableCell className={`${styles.tdFooter} ${styles.tdCenter}`}>
                <span className={styles.totalValue}>{totals.totalEligible}</span>
              </TableCell>
              <TableCell className={`${styles.tdFooter} ${styles.tdCenter}`}>
                <span className={styles.totalValue}>{totals.totalOffers}</span>
              </TableCell>
              <TableCell className={`${styles.tdFooter} ${styles.tdCenter}`}>
                <span className={styles.totalBadge}>{totals.avgPlacement}%</span>
              </TableCell>
              <TableCell className={`${styles.tdFooter} ${styles.tdCenter}`}>
                <span className={styles.totalValue}>₹{totals.highestPackage}</span>
                <span className={styles.packageUnit}> LPA</span>
              </TableCell>
              <TableCell className={`${styles.tdFooter} ${styles.tdCenter}`}>
                <span className={styles.totalValue}>₹{totals.avgPackage}</span>
                <span className={styles.packageUnit}> LPA</span>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
};

export default PlacementTable;

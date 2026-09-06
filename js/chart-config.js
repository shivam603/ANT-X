/**
 * KisanSetu-Agri DSS - Main Visual Component Chart Engine
 * Renders "Daily Mandi Inflow vs. Warehouse Capacity" (Last 7 Days)
 * Supports dynamic rendering on HTML5 Canvas with smooth responsive crisp visuals.
 */

import { CHART_DATA_7DAYS } from './data.js';

export function renderInflowChart(canvasId = 'inflowChart') {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;

  // Handle high-DPI scaling
  const rect = canvas.getBoundingClientRect();
  canvas.width = (rect.width || 800) * dpr;
  canvas.height = (rect.height || 360) * dpr;
  ctx.scale(dpr, dpr);

  const width = rect.width || 800;
  const height = rect.height || 360;

  // Padding & chart dimensions
  const padding = { top: 40, right: 30, bottom: 50, left: 60 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  // Data ranges
  const labels = CHART_DATA_7DAYS.labels;
  const inflow = CHART_DATA_7DAYS.inflowMT;
  const capacity = CHART_DATA_7DAYS.capacityMT;
  const maxVal = 30000; // max scale 30k MT

  // Clear canvas
  ctx.clearRect(0, 0, width, height);

  // Background card styling
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, width, height);

  // Draw Horizontal Grid Lines & Y-axis labels
  const yTicks = [0, 5000, 10000, 15000, 20000, 25000, 30000];
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#64748b';
  ctx.font = '12px Inter, sans-serif';
  ctx.textAlign = 'right';

  yTicks.forEach(tick => {
    const y = padding.top + chartH - (tick / maxVal) * chartH;
    
    // Line
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();

    // Label
    ctx.fillText(`${(tick / 1000).toFixed(0)}k MT`, padding.left - 10, y + 4);
  });

  // Draw X-axis labels
  const stepX = chartW / (labels.length - 1);
  ctx.textAlign = 'center';
  labels.forEach((label, i) => {
    const x = padding.left + i * stepX;
    ctx.fillStyle = '#475569';
    ctx.fillText(label, x, height - 15);
  });

  // 1. Draw Warehouse Capacity Threshold Line (25,000 MT) (Red dashed line)
  const capY = padding.top + chartH - (25000 / maxVal) * chartH;
  ctx.setLineDash([6, 4]);
  ctx.strokeStyle = '#ef4444';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(padding.left, capY);
  ctx.lineTo(width - padding.right, capY);
  ctx.stroke();
  ctx.setLineDash([]); // Reset dash

  // Label for Capacity Threshold
  ctx.fillStyle = '#b91c1c';
  ctx.font = 'bold 11px Inter, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('Max Safe Storage Capacity (25,000 MT)', width - padding.right - 10, capY - 6);

  // 2. Draw Inflow Bars & Spline Area (Forest Green & Emerald Gradient)
  const points = labels.map((_, i) => ({
    x: padding.left + i * stepX,
    y: padding.top + chartH - (inflow[i] / maxVal) * chartH,
    val: inflow[i]
  }));

  // Bar chart overlay
  const barWidth = Math.min(28, stepX * 0.35);
  points.forEach((pt, i) => {
    const barH = (inflow[i] / maxVal) * chartH;
    const barX = pt.x - barWidth / 2;
    const barY = padding.top + chartH - barH;

    // Gradient bar
    const barGrad = ctx.createLinearGradient(0, barY, 0, barY + barH);
    if (inflow[i] > 25000) {
      // Over-capacity alert bar color
      barGrad.addColorStop(0, '#f87171');
      barGrad.addColorStop(1, '#dc2626');
    } else {
      barGrad.addColorStop(0, '#34d399');
      barGrad.addColorStop(1, '#059669');
    }

    ctx.fillStyle = barGrad;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(barX, barY, barWidth, barH, [4, 4, 0, 0]) : ctx.rect(barX, barY, barWidth, barH);
    ctx.fill();
  });

  // 3. Draw Trend Line Overlay (Dark Emerald Line with glowing dots)
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    const xc = (points[i].x + points[i - 1].x) / 2;
    const yc = (points[i].y + points[i - 1].y) / 2;
    ctx.quadraticCurveTo(points[i - 1].x, points[i - 1].y, xc, yc);
  }
  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
  ctx.strokeStyle = '#15803d';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Draw Data Point Circles & Tooltip Values
  points.forEach(pt => {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#166534';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Value text above point
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 11px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${(pt.val / 1000).toFixed(1)}k`, pt.x, pt.y - 10);
  });
}

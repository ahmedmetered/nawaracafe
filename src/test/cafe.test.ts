import { describe, expect, it } from "vitest";
import { categories, filterMenu, menu, number, price } from "@/data/cafe";

describe("Café menu rules", () => {
  it("formats Arabic prices with Eastern numerals and Egyptian currency", () => {
    expect(price(65, "ar")).toBe("٦٥ ج.م");
  });
  it("formats English prices with Western numerals and Egyptian currency", () => {
    expect(price(65, "en")).toBe("EGP 65");
  });
  it("formats numeric values for each language", () => {
    expect(number(2026, "ar")).toBe("٢٠٢٦");
    expect(number(2026, "en")).toBe("2026");
  });
  it("has five or six items in each of the four menu categories", () => {
    expect(categories).toHaveLength(4);
    categories.forEach(category => {
      const count = menu.filter(item => item.category === category.id).length;
      expect(count).toBeGreaterThanOrEqual(5);
      expect(count).toBeLessThanOrEqual(6);
    });
  });
  it("searches only the active language and selected category", () => {
    expect(filterMenu("hot", "كابتشينو", "ar").map(item => item.id)).toEqual(["cappuccino"]);
    expect(filterMenu("hot", "CAPPUCCINO", "en").map(item => item.id)).toEqual(["cappuccino"]);
    expect(filterMenu("hot", "كابتشينو", "en")).toEqual([]);
    expect(filterMenu("cold", "Cappuccino", "en")).toEqual([]);
  });
});
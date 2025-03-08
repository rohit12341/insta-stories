import test, { expect } from "playwright/test";

test.describe('Home Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Check if homepage loads', async ({ page }) => {
    const homePageElement = page.locator('[data-testid="homePage"]');
    await expect(homePageElement).toBeVisible(); // Ensure it's visible
  });

  test('Check if button exists', async ({ page }) => {
    const button = page.locator('[data-testid="goToStories"]'); // Find button with ID
    await expect(button).toBeVisible();
  });

   test('Navigate to /stories after clicking button', async ({ page }) => {
    const button = page.locator('[data-testid="goToStories"]');
    await button.click();
    await page.waitForURL('/stories');
    const storyPageElement = page.locator('[data-testid="storyPage"]');
    await expect(storyPageElement).toBeVisible();
   });

   test('Navigate to /stories and open a story', async ({ page }) => {
    await page.locator('[data-testid="goToStories"]').click();
    await page.waitForURL('/stories');
    const story0 = page.locator('[data-testid="story-0"]');
    const story1 = page.locator('[data-testid="story-1"]');
    const story2 = page.locator('[data-testid="story-2"]');
    await expect(story0).toBeVisible();
    await expect(story1).toBeVisible();
    await expect(story2).toBeVisible();
    await story0.click();
    const storyContainers = page.locator('[data-testid="storyContainer-0"]');
    await expect(storyContainers).toHaveCount(1);
    const storyContainer = storyContainers.first();
    await expect(storyContainer).toBeVisible();
    await expect(storyContainer.locator('[data-testid="storyHeader"]').first()).toBeVisible();
    await expect(storyContainer.locator('[data-testid="storyContent"]').first()).toBeVisible();
  });
  
});

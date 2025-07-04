import { z } from 'zod';

// User Schemas
export const UserSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const UserPreferencesSchema = z.object({
  theme: z.enum(['light', 'dark', 'auto']),
  language: z.enum(['ko', 'en']),
  notificationSettings: z.object({
    dailyReminder: z.boolean(),
    reminderTime: z.string().optional(),
    weeklyReport: z.boolean(),
    achievements: z.boolean(),
  }),
  privacySettings: z.object({
    dataSharing: z.boolean(),
    analyticsOptIn: z.boolean(),
    biometricAuth: z.boolean(),
  }),
});

export const UserProfileSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  name: z.string().min(1).max(50).optional(),
  age: z.number().int().min(13).max(120).optional(),
  preferences: UserPreferencesSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Emotion Schemas
export const EmotionTypeSchema = z.enum([
  'joy',
  'sadness', 
  'anger',
  'fear',
  'surprise',
  'disgust',
  'trust',
  'anticipation',
  'calm',
  'anxiety'
]);

export const MoodDataSchema = z.object({
  primary: EmotionTypeSchema,
  intensity: z.number().int().min(1).max(10),
  emotions: z.array(EmotionTypeSchema),
});

export const EmotionAnalysisSchema = z.object({
  emotion: EmotionTypeSchema,
  confidence: z.number().min(0).max(1),
  intensity: z.number().int().min(1).max(10),
});

// Diary Schemas
export const CreateDiaryEntrySchema = z.object({
  content: z.string().min(1).max(5000),
  mood: MoodDataSchema.optional(),
});

export const DiaryEntrySchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  content: z.string(),
  mood: MoodDataSchema.optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Analysis Schemas
export const CBTTechniqueSchema = z.enum([
  'thought_challenging',
  'evidence_examination', 
  'alternative_perspective',
  'balanced_thinking',
  'gratitude_practice'
]);

export const CognitiveReframingSchema = z.object({
  originalThought: z.string(),
  reframedPerspectives: z.array(z.string()),
  techniques: z.array(CBTTechniqueSchema),
});

export const AnalysisResultSchema = z.object({
  id: z.string().uuid(),
  diaryEntryId: z.string().uuid(),
  emotions: z.array(EmotionAnalysisSchema),
  cognitiveReframing: CognitiveReframingSchema.optional(),
  strengths: z.array(z.string()),
  keywords: z.array(z.string()),
  sentimentScore: z.number().min(-1).max(1),
  createdAt: z.date(),
});

// Goal Schemas
export const GoalCategorySchema = z.enum([
  'emotional_wellbeing',
  'stress_management',
  'personal_growth', 
  'habit_formation',
  'relationship',
  'career'
]);

export const GoalStatusSchema = z.enum(['active', 'completed', 'paused', 'cancelled']);

export const CreateGoalSchema = z.object({
  title: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  category: GoalCategorySchema,
  targetDate: z.date().optional(),
});

export const GoalSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  title: z.string(),
  description: z.string().optional(),
  category: GoalCategorySchema,
  status: GoalStatusSchema,
  progress: z.number().int().min(0).max(100),
  targetDate: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

// Wellbeing Schemas
export const WellbeingMetricsSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  date: z.date(),
  selfEsteem: z.number().int().min(1).max(100),
  selfEfficacy: z.number().int().min(1).max(100),
  overallWellbeing: z.number().int().min(1).max(100),
  stressLevel: z.number().int().min(1).max(10),
  energyLevel: z.number().int().min(1).max(10),
});

// Feedback Schemas
export const FeedbackCategorySchema = z.enum([
  'accuracy',
  'usefulness',
  'empathy', 
  'appropriateness',
  'clarity'
]);

export const CreateFeedbackSchema = z.object({
  targetType: z.enum(['analysis', 'reframing', 'insights', 'general']),
  targetId: z.string().uuid().optional(),
  rating: z.number().int().min(1).max(5),
  categories: z.array(FeedbackCategorySchema),
  comment: z.string().max(1000).optional(),
});

export const FeedbackSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  targetType: z.enum(['analysis', 'reframing', 'insights', 'general']),
  targetId: z.string().uuid().optional(),
  rating: z.number().int().min(1).max(5),
  categories: z.array(FeedbackCategorySchema),
  comment: z.string().optional(),
  createdAt: z.date(),
});

// API Response Schemas
export const ApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.unknown().optional(),
  error: z.string().optional(),
  timestamp: z.date(),
});

export const PaginationSchema = z.object({
  page: z.number().int().min(1),
  limit: z.number().int().min(1).max(100),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
});

export const PaginatedResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(z.unknown()),
  pagination: PaginationSchema,
  error: z.string().optional(),
  timestamp: z.date(),
}); 
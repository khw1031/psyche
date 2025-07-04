export interface User {
  id: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  profile?: UserProfile;
}

export interface UserProfile {
  id: string;
  userId: string;
  name?: string;
  age?: number;
  preferences: UserPreferences;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: 'ko' | 'en';
  notificationSettings: NotificationSettings;
  privacySettings: PrivacySettings;
}

export interface NotificationSettings {
  dailyReminder: boolean;
  reminderTime?: string;
  weeklyReport: boolean;
  achievements: boolean;
}

export interface PrivacySettings {
  dataSharing: boolean;
  analyticsOptIn: boolean;
  biometricAuth: boolean;
}

export interface DiaryEntry {
  id: string;
  userId: string;
  content: string;
  mood?: MoodData;
  createdAt: Date;
  updatedAt: Date;
  analysisResult?: AnalysisResult;
}

export interface MoodData {
  primary: EmotionType;
  intensity: number; // 1-10
  emotions: EmotionType[];
}

export type EmotionType = 
  | 'joy'
  | 'sadness'
  | 'anger'
  | 'fear'
  | 'surprise'
  | 'disgust'
  | 'trust'
  | 'anticipation'
  | 'calm'
  | 'anxiety';

export interface AnalysisResult {
  id: string;
  diaryEntryId: string;
  emotions: EmotionAnalysis[];
  cognitiveReframing?: CognitiveReframing;
  strengths: string[];
  keywords: string[];
  sentimentScore: number; // -1 to 1
  createdAt: Date;
}

export interface EmotionAnalysis {
  emotion: EmotionType;
  confidence: number; // 0-1
  intensity: number; // 1-10
}

export interface CognitiveReframing {
  originalThought: string;
  reframedPerspectives: string[];
  techniques: CBTTechnique[];
}

export type CBTTechnique = 
  | 'thought_challenging'
  | 'evidence_examination'
  | 'alternative_perspective'
  | 'balanced_thinking'
  | 'gratitude_practice';

export interface Goal {
  id: string;
  userId: string;
  title: string;
  description?: string;
  category: GoalCategory;
  status: GoalStatus;
  progress: number; // 0-100
  targetDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type GoalCategory = 
  | 'emotional_wellbeing'
  | 'stress_management'
  | 'personal_growth'
  | 'habit_formation'
  | 'relationship'
  | 'career';

export type GoalStatus = 'active' | 'completed' | 'paused' | 'cancelled';

export interface WellbeingMetrics {
  id: string;
  userId: string;
  date: Date;
  selfEsteem: number; // 1-100
  selfEfficacy: number; // 1-100
  overallWellbeing: number; // 1-100
  stressLevel: number; // 1-10
  energyLevel: number; // 1-10
}

export interface Feedback {
  id: string;
  userId: string;
  targetType: 'analysis' | 'reframing' | 'insights' | 'general';
  targetId?: string;
  rating: number; // 1-5
  categories: FeedbackCategory[];
  comment?: string;
  createdAt: Date;
}

export type FeedbackCategory = 
  | 'accuracy'
  | 'usefulness' 
  | 'empathy'
  | 'appropriateness'
  | 'clarity'; 